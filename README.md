# Retrieve data from Google Analytics API

### Configure Google Cloud Platform

#### 1. Create a new project in the [Google Cloud Console](https://console.cloud.google.com/).
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*y4NODtJ68Aa3smO-.jpg)

#### 2. Enable the Google Analytics API.
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*I70YXM53RW9RbLVV.jpg)
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*7R_c1Be60wrKXs8U.jpg)

#### 3. Create a service account

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*diucFBt0jMBKzdie.jpg)

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*u7jf41PxGRaUmdyZ.jpg)

1. copy the email from the service account (`SERVICE_ACCOUNT_EMAIL`)
2. select `Manage keys`, create a new key and download the JSON key

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*WbFkf95Jox2t8lW4.jpg)
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*-RlRE85IRAEmmOeA.jpg)
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*9TVl73XepWglh6yr.jpg)

3. copy the private key from the JSON file (`SERVICE_ACCOUNT_PRIVATE_KEY`)

#### 4. Add the service account email to the Google Analytics account with read access.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ZyU7zJf_l5S_NSUG.jpg)
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*a-OLUb2Iu_KVnUvC.jpg)

#### 5. Copy the property id from the Property Details (`PROPERTY_ID`)

![](https://i.ibb.co/X2NrkfC/Screenshot-2024-09-16-at-15-28-06.png)

### Test

#### Fill in the credentials in the `.env` file:

```dotenv
PROPERTY_ID="..."
SERVICE_ACCOUNT_EMAIL="...@....iam.gserviceaccount.com"
SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----"
```

#### Run the script:

```bash
npm run test
```
