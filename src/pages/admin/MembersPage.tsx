import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  PageHeader,
  PageTitle,
  PageDesc,
  Panel,
  Table,
  TableWrap,
  Th,
  Td,
  StatusBadge,
} from '@/pages/admin/components/ui'
import { fetchMembers, type AdminMemberRow } from '@/lib/admin-data'

const TABS = ['전체', 'Active', 'Inactive'] as const

export function MembersPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('전체')
  const [members, setMembers] = useState<AdminMemberRow[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    let active = true
    void fetchMembers().then((rows) => {
      if (!active) return
      setMembers(rows)
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [])

  const rows = useMemo(
    () => members.filter((m) => tab === '전체' || m.status === tab),
    [members, tab],
  )

  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>Members</PageTitle>
          <PageDesc>전체 {members.length}명의 회원을 관리합니다.</PageDesc>
        </div>
      </PageHeader>

      <Tabs>
        {TABS.map((t) => (
          <Tab key={t} type="button" $active={tab === t} onClick={() => setTab(t)}>
            {t}
          </Tab>
        ))}
      </Tabs>

      <Panel>
        <TableWrap>
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
        </TableWrap>
        {!loading && rows.length === 0 && <Empty>회원이 없습니다.</Empty>}
        <Footer>
          <FootInfo>
            {rows.length}명 표시 · 전체 {members.length}명
          </FootInfo>
        </Footer>
      </Panel>
    </>
  )
}

const Tabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;

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

const Empty = styled.div`
  padding: 40px 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.kr};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
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
