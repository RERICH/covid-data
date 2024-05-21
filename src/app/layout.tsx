import type { Metadata } from "next";
import { Layout } from "antd";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Content, Header } from "antd/es/layout/layout";
import "./index.css"


export const metadata: Metadata = {
  title: "Covid Data App",
  description: "Example application to check latest covid data ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Layout style={{ display:"flex", minHeight:"100vh" }}>
            <Header style={{ background: 'white' }}>
              <strong>Covid Data App</strong>              
            </Header>
            <Content style={{ padding: '0 48px' }}>
              {children}            
            </Content>
          </Layout>  
        </AntdRegistry>    
      </body>
    </html>
  );
}
