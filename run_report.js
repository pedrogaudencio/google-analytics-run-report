const dotenv = require('dotenv')
const { BetaAnalyticsDataClient } = require('@google-analytics/data');

dotenv.config()

// Needs 3 credentials:
const client_email = process.env.SERVICE_ACCOUNT_EMAIL
const private_key = process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n')
const property_id = process.env.PROPERTY_ID

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email,
    private_key,
  }
});

// Runs a simple report.
async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${property_id}`,
    dateRanges: [
      {
        startDate: '2024-01-01',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'city',
      },
    ],
    metrics: [
      {
        name: 'activeUsers',
      },
    ],
  });

  console.log('Report result:');
  response.rows.forEach(row => {
    console.log(row.dimensionValues[0], row.metricValues[0]);
  });
}

runReport();
