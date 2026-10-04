// Serverless Function for Vercel: /api/leads
export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { name, email, phone, company, service, industry, timeline, requirements } = req.body || {};

    if (!name || !email || !phone || !service) {
      return res.status(400).json({
        error: 'Missing mandatory fields: name, email, phone, and service are required.'
      });
    }

    const referenceId = 'MQ-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + Math.floor(1000 + Math.random() * 9000);

    const leadPayload = {
      referenceId,
      name,
      email,
      phone,
      company: company || 'N/A',
      service,
      industry: industry || 'N/A',
      timeline: timeline || 'Flexible',
      requirements: requirements || 'General Project Scope',
      receivedAt: new Date().toISOString()
    };

    console.log('[LEAD RECEIVED]', JSON.stringify(leadPayload));

    // Optional webhook dispatch (e.g. Slack, Discord, Zapier, Make, HubSpot)
    if (process.env.LEAD_WEBHOOK_URL) {
      try {
        await fetch(process.env.LEAD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload)
        });
      } catch (webhookErr) {
        console.error('[WEBHOOK ERROR]', webhookErr);
      }
    }

    // Optional email dispatch via Resend API
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'leads@meeqattechnologies.in',
            to: process.env.NOTIFICATION_EMAIL || 'syedshabudeen@gmail.com',
            subject: `[New Lead ${referenceId}] ${service} - ${name} (${company || 'Direct'})`,
            html: `
              <h2>New Project Inquiry Received</h2>
              <p><strong>Reference:</strong> ${referenceId}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Company:</strong> ${company || 'N/A'}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Industry:</strong> ${industry || 'N/A'}</p>
              <p><strong>Timeline:</strong> ${timeline || 'Flexible'}</p>
              <hr />
              <p><strong>Requirements:</strong></p>
              <p>${requirements || 'N/A'}</p>
            `
          })
        });
      } catch (resendErr) {
        console.error('[RESEND ERROR]', resendErr);
      }
    }

    return res.status(200).json({
      success: true,
      referenceId,
      message: 'Lead inquiry recorded successfully.'
    });
  } catch (error) {
    console.error('[SERVERLESS LEADS ERROR]', error);
    return res.status(500).json({ error: 'Internal server error processing inquiry.' });
  }
}
