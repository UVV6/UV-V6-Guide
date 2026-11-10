# UV V6 Beta Guide

Independent static community guide for UV V6.

## Enable GitHub Pages
1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then save.
4. The site should publish at https://uvv6.github.io/UV-V6-Guide/

## Gift codes
In `app.js`, find `const giftCodes=[];` and add only UV V6 codes confirmed by the community, e.g. `{code:"VERIFIEDCODE",note:"Confirmed by UV V6 community"}`. Do not guess codes or expiry dates.

## Calculators
Six editable resource planners are provided. Enter costs confirmed for the current UV V6 build. Entries are stored locally in each visitor's browser; nothing is sent to a server. Official-game costs are not assumed to match this private server.

## Support form
The form opens the visitor's email application using `mailto:`. No support email was supplied, so it leaves the recipient blank. Discord is linked directly.

## Top-up
Coming Soon notice only. No checkout, payment processor or payment links are included.

This is an independent implementation and does not reuse the original EU1 guide's source code or proprietary artwork.