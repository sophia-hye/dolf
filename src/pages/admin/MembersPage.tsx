import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  PrimaryButton,
  Table,
  Th,
  Td,
  StatusBadge,
} from '@/pages/admin/components/ui'
import { adminMembers } from '@/data/admin-mock'

const TABS = ['전체', 'Active', 'Inactive'] as const

export function MembersPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('전체')
  const navigate = useNavigate()

  const rows = adminMembers.filter((m) => tab === '전체' || m.status === tab)

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Members</PageTitle>
          <PageDesc>전체 1,284명의 회원을 관리합니다.</PageDesc>
        </div>
        <PrimaryButton type="button">+ 회원 추가</PrimaryButton>
      </PageHeader>

      <Toolbar>
        <Tabs>
          {TABS.map((t) => (
            <Tab key={t} type="button" $active={tab === t} onClick={() => setTab(t)}>
              {t}
            </Tab>
          ))}
        </Tabs>
        <Search placeholder="이름 · 이메일 검색…" />
      </Toolbar>

      <Panel>
        <Table>
          <thead>
            <tr>
              <Th>이름</Th>
              <Th>이메일</Th>
              <Th>가입일</Th>
              <Th>주문</Th>
              <Th>총 구매액</Th>
              <Th>등급</Th>
              <Th>상태</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => (
              <Row key={m.id} onClick={() => navigate(`/admin/members/${m.id}`)}>
                <Td>{m.name}</Td>
                <Td>{m.email}</Td>
                <Td>{m.joinedAt}</Td>
                <Td>{m.orders}</Td>
                <Td>{m.totalSpent}</Td>
                <Td>
                  <Grade $vip={m.grade === 'VIP'}>{m.grade}</Grade>
                </Td>
                <Td>
                  <StatusBadge $status={m.status}>{m.status}</StatusBadge>
                </Td>
              </Row>
            ))}
          </tbody>
        </Table>
        <Footer>
          <FootInfo>1–8 / 1,284명</FootInfo>
          <Pagination>
            <PageBtn $active>1</PageBtn>
            <PageBtn>2</PageBtn>
            <PageBtn>3</PageBtn>
            <PageBtn>…</PageBtn>
            <PageBtn>161</PageBtn>
          </Pagination>
        </Footer>
      </Panel>
    </>
  )
}

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`

const Tabs = styled.div`
  display: flex;
  gap: 8px;

  ${({ theme }) => theme.media.mobile} {
    flex-wrap: wrap;
  }
`

const Tab = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.border)};
  border-radius: 20px;
  background-color: ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.white)};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.textSecondary)};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  cursor: pointer;
`

const Search = styled.input`
  width: 280px;
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
    box-sizing: border-box;
  }
`

const Row = styled.tr`
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`

const Grade = styled.span<{ $vip: boolean }>`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  font-weight: 500;
  color: ${({ theme, $vip }) => ($vip ? theme.colors.brandRed : theme.colors.textSecondary)};
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

const FootInfo = styled.span`
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Pagination = styled.div`
  display: flex;
  gap: 6px;
`

const PageBtn = styled.button<{ $active?: boolean }>`
  min-width: 30px;
  height: 30px;
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.border)};
  border-radius: 4px;
  background-color: ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.white)};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.textSecondary)};
  font-size: ${({ theme }) => theme.fontSizes.eyebrow};
  cursor: pointer;
`
