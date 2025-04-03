'use server'

import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID!);

export async function joinWaitlist(email: string) {
  try {
    // Create a record in Airtable
    const record = await base(process.env.AIRTABLE_TABLE_NAME!).create([
      {
        fields: {
          Email: email
        }
      }
    ]);

    console.log('Email stored successfully:', record);
    return { success: true };
  } catch (error) {
    console.error('Error storing email:', error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}

