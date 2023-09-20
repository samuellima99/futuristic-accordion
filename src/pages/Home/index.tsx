import { useState } from 'react';

import image01 from '../../assets/images/cyber01.jpeg';
import image02 from '../../assets/images/cyber02.jpeg';
import image03 from '../../assets/images/cyber03.jpeg';
import image04 from '../../assets/images/cyber04.jpeg';
import image05 from '../../assets/images/cyber05.jpeg';

import * as S from './styles';

const items = [
  {
    id: 1,
    name: 'Nyx',
    avatar: image01,
    active: true,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae mattis ante. In ut risus at quam congue vehicula et at nulla. Etiam interdum felis mollis augue euismod imperdiet. Donec ac posuere enim.',
  },
  {
    id: 2,
    name: 'Gaia',
    avatar: image02,
    active: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae mattis ante. In ut risus at quam congue vehicula et at nulla. Etiam interdum felis mollis augue euismod imperdiet. Donec ac posuere enim.',
  },
  {
    id: 3,
    name: 'Proton',
    avatar: image03,
    active: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae mattis ante. In ut risus at quam congue vehicula et at nulla. Etiam interdum felis mollis augue euismod imperdiet. Donec ac posuere enim.',
  },
  {
    id: 4,
    name: 'Electra',
    avatar: image04,
    active: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae mattis ante. In ut risus at quam congue vehicula et at nulla. Etiam interdum felis mollis augue euismod imperdiet. Donec ac posuere enim.',
  },
  {
    id: 5,
    name: 'Orix',
    avatar: image05,
    active: false,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae mattis ante. In ut risus at quam congue vehicula et at nulla. Etiam interdum felis mollis augue euismod imperdiet. Donec ac posuere enim.',
  },
];

export function Home() {
  const [activeItem, setActiveItem] = useState(1);

  function handleActiveAccordion(itemId: number) {
    setActiveItem(itemId);
  }
  return (
    <S.Container>
      <S.Wrapper>
        {items.map((item) => (
          <S.AccordionItem
            key={item.id}
            active={activeItem === item.id}
            bg={item.avatar}
            onClick={() => handleActiveAccordion(item.id)}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </S.AccordionItem>
        ))}
      </S.Wrapper>

      <S.CreditsWrapper>
        <S.CodeBy>Desenvolvido por:</S.CodeBy>
        <S.UserName>Samuel Lima 🤟</S.UserName>
      </S.CreditsWrapper>
    </S.Container>
  );
}
