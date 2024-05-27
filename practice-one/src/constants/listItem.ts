import { IMenu } from "@/ui/components";

const listTypePosts: string[] = ["New", "Trendy", "Popular", "Top"];

const listCategories: IMenu[] = [
  {
    key: "World",
    name: "World News",
    path: "/category/worldnews",
  },
  {
    key: "National",
    name: "National News",
    path: "/category/nationalnews",
  },
  {
    key: "Local",
    name: "Local News",
    path: "/category/localnews",
  },
  {
    key: "Business",
    name: "Business and Finance",
    path: "/category/business-and-finance",
  },
  {
    key: "Technology",
    name: "Technology",
    path: "/category/technology",
  },
  {
    key: "Health",
    name: "Health and Wellness",
    path: "/category/health-and-wellness",
  },
  {
    key: "Science",
    name: "Science and Environment",
    path: "/category/science-and-environment",
  },
  {
    key: "Entertainment",
    name: "Entertainment",
    path: "/category/entertainment",
  },
  {
    key: "Sports",
    name: "Sports",
    path: "/category/sports",
  },
  {
    key: "Lifestyle",
    name: "Lifestyle",
    path: "/category/lifestyle",
  }
];

export { listTypePosts, listCategories };
