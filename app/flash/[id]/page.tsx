import { getPostContent } from "@/helpers/postHelpers";
import Index from "@/components/markdown/index";

export default async function Page({ params: { id } }: any) {
  const decodedId = decodeURI(id);
  const content = getPostContent(decodedId);
  return (
    <main>
    <Index decodedId={decodedId} content={content} />
  </main>
  );
}
