// services
import { getCategoryData } from '@/services';
import { ICategoryItem, IMenu } from '@/types';

// componens
import { BurgerMenu } from '@/ui/components';

export default async function CategoryBurgerMenu() {
  const { data: categoryDataResponse = [] } = await getCategoryData();

  const listCategories: IMenu[] = [];

  categoryDataResponse?.map((category: ICategoryItem) => {
    const { id } = category;
    const { name } = category.attributes;

    listCategories.push({
      id: id.toString(),
      name: name,
    });
  });

  return <BurgerMenu listCategories={listCategories} />;
}
