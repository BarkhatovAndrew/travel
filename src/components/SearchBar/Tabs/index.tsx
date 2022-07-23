import { FC, useState } from 'react'
import { tabs } from '../../../utils/headerTabs'
import { StyledButton } from './styles'

const Tabs: FC = () => {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0)
  const handleActiveTab = (id: 0 | 1 | 2) => {
    setActiveTab(id)
  }
  return (
    <div className="buttons">
      {tabs.map((tab, index) => (
        <StyledButton
          key={tab.id}
          active={tab.id === activeTab}
          onClick={() => handleActiveTab(tab.id)}
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            delay: 0.2 + index / 5,
            stiffness: 900,
          }}
        >
          {tab.icon}
          {tab.title}
        </StyledButton>
      ))}
    </div>
  )
}

export default Tabs
