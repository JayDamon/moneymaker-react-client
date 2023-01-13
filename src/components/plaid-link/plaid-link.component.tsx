import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { createLinkToken, createPrivateAccessToken } from '../../utils/plaid.utils';

const PlaidLink = () => {
  const [linkToken, setLinkToken] = useState("");
  const generateToken = async () => {
    const linkToken = await createLinkToken();
    console.log("Link Token Found: ", linkToken)
    setLinkToken(linkToken);
  };
  useEffect(() => {
    generateToken();
  }, []);
  return linkToken != null ? <Link linkToken={linkToken} /> : <></>;
};

// LINK COMPONENT
// Use Plaid Link and pass link token and onSuccess function
// in configuration to initialize Plaid Link
interface LinkProps {
  linkToken: string | null;
}

const Link: React.FC<LinkProps> = (props: LinkProps) => {

  const onSuccess = React.useCallback((public_token: string) => {
    // send public_token to server
    console.log("Public Token", public_token);
    createPrivateAccessToken(public_token);
    // Handle response ...
  }, []);

  const config: Parameters<typeof usePlaidLink>[0] = {
    token: props.linkToken!,
    // receivedRedirectUri: window.location.href,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <button onClick={() => open()} disabled={!ready}>
      Link account
    </button>
  );
};
export default PlaidLink;