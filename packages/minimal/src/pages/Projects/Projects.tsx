import React, { ChangeEvent, FC, useState } from 'react'
import { Table } from 'components/Table'
import { Paragraph, Subtitle, Title } from 'components/Typography'
import { Button } from 'components/Button'
import { Modal } from 'components/Modal'
import { Input } from 'components/Input'
import { Loading } from 'components/Loading'
import { $Inputs, $Projects, $Actions, $Cell, $Name, $Copy, $DeleteModal, $DeleteActions } from './styles'

export const Projects: FC = () => {
  const hasPagination = false
  const isWorking = false
  const pagination = { limit: 1, total: 1}
  const initialState = {
    id: '',
    name: '',
    email: '',
    company: '',
  }
  const initialProjects = [{
    id: 'Ac6xnUtWyvAc6xnUtWyv', 
    name: 'John', 
    email: 'john@cloudoki.com', 
    company: 'cloudoki',
    lastStep: 'step_01',
    lastActive: Date.now(),
  }]
  
  const [page, selectPage] = useState(0)
  const [isOpen, setOpen] = useState<'create' | 'edit' | 'delete' | ''>('')
  const [projects, setProjects] = useState(initialProjects)
  const [state, setState] = useState(initialState)

  const btnDisabled = !state.name && !state.email && !state.company

  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: value})
  }

  const clearState = () => {
    setOpen('')
    setState({ 
      id: '',
      name: '',
      email: '',
      company: '',
    })
    selectPage(0)
  }

  const handleAddProject = () => {
    setProjects([...projects, {...state, id: 'Ac6xnUtWyvAc6xnUtWyv', lastActive: Date.now(), lastStep: 'step_01'}])
    clearState()
  }

  const handleEditProject = () => {
    const idx = projects.findIndex((project) => project.id === state.id)
    const newProjects = projects.slice()
    newProjects.splice(idx, 1, {...state, id: 'Ac6xnUtWyvAc6xnUtWyv', lastActive: Date.now(), lastStep: 'step_01'})
    setProjects(newProjects)
    clearState()
  }

  const handleDeleteProject = () => {
    const idx = projects.findIndex((project) => project.id === state.id)
    const newProjects = projects.slice()
    newProjects.splice(idx, 1)
    setProjects(newProjects)
  }

  const handleEditClick = (id: string) => () => {
    const project = projects.find((project) => id === project.id)
    if (project) {
      setState({ 
        id: project.id,
        name: project.name,
        email: project.email,
        company: project.company,
      })
    }
    setOpen('edit')
  }

  const handleDeleteClick = (id: string) => () => {
    const project = projects.find((project) => id === project.id)
    if (project) {
      setState({ 
        id: project.id,
        name: project.name,
        email: project.email,
        company: project.company,
      })
      setOpen('delete')
    }
  }

  const handlePageChange = (page:number) => {
    selectPage(page)
  }

  const handleCopyUrl = (value: string) => () => {
    navigator.clipboard.writeText(`asdasdas/${value}`)
  }

  if (isWorking) return <Loading />
  
  return (
    <$Projects pagination={hasPagination}>
      <Title>Projects</Title>
      <Table 
        limit={pagination.limit}
        total={pagination.total}
        onChange={handlePageChange}
        selected={page}
        head={['Project name', 'E-mail', 'Unique link', 'Last step', 'Last active', '']} 
        rows={projects.map((project, idx) => {
          const date = project.lastActive 
            && new Date(project.lastActive).toLocaleString('en-US') || ''

          return ({
            cells: [
              <$Cell key={`project-name-${idx}`}>
                <$Name>{project.name}</$Name>
                <$Name bold>{project.company}</$Name>
              </$Cell>,
              project.email,
              <$Cell key={`project-id-${idx}`} direction='row'>
                {project.id}
                <$Copy onClick={handleCopyUrl(project.id)} />
              </$Cell>,
              project.lastStep, 
              date,
              <$Actions 
                key={`p-edit-${idx}`} 
                icon='menu-vertical'
                items={[
                  { icon: 'edit', label: 'Edit', onClick: handleEditClick(project.id) },
                  { icon: 'delete', label: 'Delete', onClick: handleDeleteClick(project.id) },
                ]}
              />,
            ],
          })})} />
      <Button onClick={() => setOpen('create')}>Add new Project</Button>
      {['edit','create'].includes(isOpen) && 
        <Modal onClose={() => clearState()}>
          <$Inputs>
            <Subtitle nomargin>{`${isOpen === 'edit' ? 'Edit' : 'Add'} Project`}</Subtitle>
            <Input 
              name='name'
              type='text'
              placeholder='Project name'
              value={state.name}
              onChange={handleInputChange}
            />
            <Input 
              name='company'
              type='text'
              placeholder='Company name'
              value={state.company}
              onChange={handleInputChange}
            />
            <Input 
              name='email'
              type='email'
              placeholder='E-mail'
              value={state.email}
              onChange={handleInputChange}
            />
            <Button 
              disabled={btnDisabled} 
              onClick={isOpen === 'edit' ? handleEditProject : handleAddProject}
            >
              {`${isOpen === 'edit' ? 'Edit' : 'Add'} Project`}
            </Button>
          </$Inputs>
        </Modal>
      }
      {isOpen === 'delete' && 
        <$DeleteModal onClose={() => clearState()}>
          <Subtitle nomargin>{'Delete Project'}</Subtitle>
          <Paragraph>{`Are you sure you want to delete ${state.name} ?`}</Paragraph>
          <$DeleteActions>
            <Button onClick={handleDeleteProject}>
              Delete
            </Button>
            <Button onClick={() => clearState()}>
              Cancel
            </Button>
          </$DeleteActions>
        </$DeleteModal>
      }
    </$Projects>
  )
}