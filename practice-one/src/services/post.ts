import { PostResponse, PostVariant } from "@/types";
import { SERVER_BASE_URL } from "@/constants";

interface PostsResponse {
  data: PostResponse[];
}

async function getPostDataByAttribute(
  attribute: PostVariant
): Promise<PostsResponse> {
  const queryByAttribute = `sort=${attribute}:desc`;

  const res = await fetch(`${SERVER_BASE_URL}/api/posts?${queryByAttribute}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();

  return data;
}

async function getAuthorById(id: string) {
  const res = await fetch(`${SERVER_BASE_URL}/api/authors/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = res.json();

  return data;
}

export { getPostDataByAttribute, getAuthorById };
