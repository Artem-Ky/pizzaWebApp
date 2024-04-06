import { useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import { useEffect } from "react";
import {
  deleteBannerTypes,
  getBannerTypes,
  putBannerTypes,
  setBannerTypes
} from "../../../../stores/slices/ActionCreators";
import { useAppDispatch } from '../../../../customHooks/redux/redux';
import { IBannerType } from '../../../../types';

const BannerType = () => {
  const dispatch = useAppDispatch();
  const { bannerTypes } = useSelector((state: RootState) => state.admin);
  const [newBannerType, setNewBannerType] = useState('');
  const [editBannerTypes, setEditBannerTypes] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    dispatch(getBannerTypes());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(setBannerTypes({ id: 0, type: newBannerType }));
    setNewBannerType(''); 
  };

  const handleUpdate = (id: number) => {
    const type = editBannerTypes[id];
    dispatch(putBannerTypes({ id, type }));
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

      {bannerTypes.map((item:IBannerType) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <input
            value={editBannerTypes[item.id] || item.type}
            onChange={(e) => setEditBannerTypes({ ...editBannerTypes, [item.id]: e.target.value })}
            type="text"
          />
          <button onClick={() => handleUpdate(item.id)}>изменить</button>
          <button onClick={() => dispatch(deleteBannerTypes(item.id))}>удалить</button>
        </div>
      ))}
    </>
  );
};

export default BannerType;
