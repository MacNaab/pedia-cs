import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-react";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeCopyBtn from "./codeCopyBtn";
import { Blockquote } from "./markdown-alert";

export default function PostBody({ children }: any) {
  // Add the CodeCopyBtn component to our PRE element
  const Pre = ({ children }: any) => <CodeCopyBtn>{children}</CodeCopyBtn>;
  
  return (
    <ReactMarkdown
      className="post-markdown"
      // linkTarget='_blank'
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        pre: Pre,
        blockquote: Blockquote,
        /*
                code({ node, className = "blog-code", children, ...props }) {
                    return
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                            // style={dark}
                            style={{ theme: dark }}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) :
                    (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
                */
        code({ node, className = "blog-code", children, ...props }) {
          return (
            <div>
              <code className={className} {...props}>
                {children}
              </code>
            </div>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
