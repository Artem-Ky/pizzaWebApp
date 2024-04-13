import { useState } from 'react';
import {AdminPanel} from '../../../../stores/RTKQuery/adminPanel'
import { IBannerType } from '../../../../types';

const BannerType = () => {

  const [newBannerType, setNewBannerType] = useState('');
  const [editBannerTypes, setEditBannerTypes] = useState<{ [key: number]: string }>({});



const {data: bannerTypes} = AdminPanel.useFetchAllBannerTypesQuery();
const [createBannerType, {} ] = AdminPanel.useCreateBannerTypeMutation();
const [updateBannerType, {}] = AdminPanel.useUpdateBannerTypeMutation();
const [deleteBannerType, {}] = AdminPanel.useDeleteBannerTypeMutation();


  const handleCreate = async () => {
    await createBannerType({id: 0, type: newBannerType} as IBannerType)
    setNewBannerType(''); 
  };
  const handleUpdate = async (id: number) => {
    const type = editBannerTypes[id];
    await updateBannerType({id, type} as IBannerType)
  };
  const handleDelete= async (id: number) => {
    await deleteBannerType(id)
  };

  return (
    <>
      <input
        value={newBannerType}
        onChange={(e) => setNewBannerType(e.target.value)}
        type="text"
        placeholder="Введите тип баннера"
      />
      <button onClick={handleCreate}>
        Создать новый тип баннера
      </button>
      {bannerTypes?.map((item:IBannerType) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <input
            value={editBannerTypes[item.id] || item.type}
            onChange={(e) => setEditBannerTypes({ ...editBannerTypes, [item.id]: e.target.value })}
            type="text"
          />
          <button onClick={() => handleUpdate(item.id)}>изменить</button>
          <button onClick={() => handleDelete(item.id)}>удалить</button>
        </div>
      ))}
    </>
  );
};

export default BannerType;
