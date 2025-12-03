
import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from '@react-email/components';
import {
  main,
  container,
  logo,
  heading,
  text,
  link,
  footer,
  section,
  paragraph,
} from './email-styles';

interface RfqSubmissionEmailProps {
  fullName: string;
  quoteReference: string;
  items: Array<{
    productName: string;
    quantity: number;
    unit: string;
  }>;
}

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const RfqSubmissionEmail: React.FC<RfqSubmissionEmailProps> = ({
  fullName,
  quoteReference,
  items,
}) => (
  <Html>
    <Head />
    <Preview>Your BZION RFQ Confirmation</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${BASE_URL}/images/bzion-logo.png`}
          width="150"
          alt="BZION Logo"
          style={logo}
        />
        <Heading style={heading}>Thank you for your Request for Quote!</Heading>
        <Text style={text}>
          Hello {fullName},
        </Text>
        <Text style={paragraph}>
          We have successfully received your Request for Quote. Our team will review your request and get back to you with a detailed quotation shortly.
        </Text>
        <Text style={paragraph}>
          Your Quote Reference number is: <strong>{quoteReference}</strong>
        </Text>

        <Section style={section}>
          <Heading as="h2" style={{ ...heading, fontSize: '20px' }}>
            Request Summary
          </Heading>
          {items.map((item) => (
            <Row key={item.productName}>
              <Column>
                <Text style={text}>
                  <strong>{item.productName}</strong>
                </Text>
              </Column>
              <Column style={{ textAlign: 'right' }}>
                <Text style={text}>
                  {item.quantity} {item.unit}
                </Text>
              </Column>
            </Row>
          ))}
        </Section>

        <Text style={text}>
          You can view the status of your quote and manage your account by visiting our website:
        </Text>
        <Link style={link} href={BASE_URL}>
          Go to your BZION Account
        </Link>
        <Text style={footer}>
          BZION | Your Trusted Partner in FMCG Distribution
        </Text>
      </Container>
    </Body>
  </Html>
);

export default RfqSubmissionEmail;

