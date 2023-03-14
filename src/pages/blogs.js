import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div>
        {data.allAsciidoc.nodes.map((node) => (
          <div
            style={{
              margin: "20px",
              border: "2px solid black",
              padding: "10",
            }}
            key={node.document.title}
          >
            <div>{node.document.title}</div>
            <div>{node.author.fullName}</div>
            <div>{node.author.email}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allAsciidoc {
      nodes {
        document {
          main
          subtitle
          title
        }
        author {
          email
          authorInitials
          firstName
          fullName
          lastName
          middleName
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
