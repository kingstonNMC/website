import { EmailTemplate } from '../../components/email';
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend('re_7duRQ457_CB6TEwJv3vaYpnKcagZRsPiM');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {name, email, question, company} = JSON.parse(req.body) 
  // res.status(200).json({ name: name })
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'WEB LEAD <info@meetfutureproof.com>',
      to: ['cody@meetfutureproof.com'],
      subject: 'NEW WEB LEAD - MEETFUTUREPROOF.COM',
      react: EmailTemplate({ 
        name,
        email,
        question,
        company
      }),
    });

    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
}