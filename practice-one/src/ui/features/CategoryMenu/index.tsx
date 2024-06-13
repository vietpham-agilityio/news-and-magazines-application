// services
import { getCategoryData } from '@/services';
import { CategoryResponse, IMenu } from '@/types';

// componens
import { Menu } from '@/ui/components';

export default async function CategoryMenu() {
  const { data: categoryDataResponse = [] } = await getCategoryData();

  const listCategories: IMenu[] = [];

  categoryDataResponse.map((category: CategoryResponse) => {
    const { id } = category;
    const { name } = category.attributes;

    listCategories.push({
      id: id.toString(),
      name: name,
    });
  });

  return <Menu name="Categories" listMenu={listCategories} />;
}