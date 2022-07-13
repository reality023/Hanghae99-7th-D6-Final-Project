// module
import { React } from "react";
import styled from "styled-components";
import Container from "../components/common/Container";

// components
import Header from "../components/common/Header";

// redux
import MoumSelect from "../components/Moum/MoumSelect";
import MoumOptionGroup from "../components/Moum/MoumSortGroup";
import PieceList from "../components/Moum/PieceList";
import MoumTitleContent from "../components/Moum/MoumTitleContent";
import MoumTitleCreateForm from "../components/Moum/MoumTitleCreateForm";
import { useRecoilValue } from "recoil";
import { pageMoumSelectedFolderId } from "../atoms/moum";
import MoumList from "../components/Moum/MoumList";
import { useState } from "react";
import MoumHeaderCommon from "../components/Moum/MoumHeaderCommon";

function Moum() {
  const selectedFolderId = useRecoilValue(pageMoumSelectedFolderId);
  const [selectAll, setSelectAll] = useState(false);
  const onSelectAll = (status) => {
    setSelectAll(status);
  }
  return (
    <Container>
      <Title>
        <Header selected={1} />
        <MoumTitleContent />
        <MoumTitleCreateForm />
      </Title>
      <Content>
        <MoumHeader>
          <MoumHeaderCommon />
          {selectedFolderId !== 0 && <MoumSelect />}
          <MoumOptionGroup isFolderView={selectedFolderId === 0} onSelectAll={onSelectAll} />
        </MoumHeader>
        <PieceBoard>
          {selectedFolderId === 0 ? <MoumList /> : <PieceList selectAll={selectAll} />}
        </PieceBoard>
      </Content>
    </Container>
  )
}

const Title = styled.div`
  width: 100%;
  height: 500px;
  background-color: #E5D6FF;
  border-radius: 0 0 60px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 1200px;
  padding-bottom: 70px;
`;

const PieceBoard = styled.div`
  margin-top: 0px;
`;

const MoumHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Moum;