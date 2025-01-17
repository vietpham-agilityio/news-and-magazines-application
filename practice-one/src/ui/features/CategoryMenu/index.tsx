// services
import { getCategoryData } from '@/services';

// types
import { ICategoryItem, IMenu } from '@/types';

// componens
import { Menu } from '@/ui/components';

const CategoryMenu = async () => {
  const { data: categoryDataResponse = [] } = await getCategoryData();

  const listCategories: IMenu[] = [];

  categoryDataResponse.map((category: ICategoryItem) => {
    const { id } = category;
    const { name } = category.attributes;

    listCategories.push({
      id: id.toString(),
      name: name,
    });
  });

  return <Menu name="Categories" listMenu={listCategories} />;
};

export default CategoryMenu;
