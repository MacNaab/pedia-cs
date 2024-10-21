import Index from "@/components/markdown/index";
import { getListOfPosts } from "@/helpers/postHelpers";

export default async function Page() {
  const listOfPosts = getListOfPosts();
  return (
    <main>
    <Index decodedId={""} content={JSON.stringify(listOfPosts).replaceAll('.md', "")} />
  </main>
  );
}
