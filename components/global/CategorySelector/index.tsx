import React, { useCallback, useState } from 'react';

import { CategoryContainer, SelectContainer } from './style';

import { AiFillCaretDown } from 'react-icons/ai';

import Link from 'next/link';

import OutsideClickHandler from 'react-outside-click-handler';

const CategorySelector = () => {
  const [openedSelect, setOpenedSelect] = useState(false);

  const handleToggleSelect = useCallback(() => {
    setOpenedSelect(!openedSelect);
  }, []);

  const handleCloseSelect = useCallback(() => {
    setOpenedSelect(false);
  }, []);

  return (
    <CategoryContainer>
      <label>Selecione a Categoria do Produto</label>

      <OutsideClickHandler onOutsideClick={handleCloseSelect}>
        <SelectContainer isOpen={openedSelect} onClick={handleToggleSelect}>
          <span>Todos</span>

          <AiFillCaretDown />

          <ul>
            <li>
              <Link href="#">
                <a title="Confirerir produtos">Cama</a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a title="Confirerir produtos">Berãos</a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a title="Confirerir produtos">Mesa de exames</a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a title="Confirerir produtos">Suporte de Soro</a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a title="Confirerir produtos">Cama</a>
              </Link>
            </li>
          </ul>
        </SelectContainer>
      </OutsideClickHandler>
    </CategoryContainer>
  );
};

export { CategorySelector };
