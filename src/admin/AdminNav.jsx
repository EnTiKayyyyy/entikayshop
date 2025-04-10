import React from 'react'
import { Container } from 'reactstrap'
import useAuth from '../custom-hooks/useAuth'
import { Navbar,Input, Avatar, Link} from '@nextui-org/react'
import { useLocation } from 'react-router-dom'

const AdminNav = () => {

    const location = useLocation()


    const {currentUser} = useAuth()
    const admin__nav = [
        {
            display: 'Dashboard',
            path: '/'
        },
        {
            display: 'All Products',
            path: '/dashboard/all-products'
        },
        {
            display: 'Orders',
            path: '/dashboard/orders'
        },
        {
            display: 'Users',
            path: '/dashboard/users'
        }
    ]

  return (
    <div>
        <div>
            <Container>
                <Navbar variant='sticky' isBordered>
                    <Navbar.Toggle showIn='sm' />
                    <Navbar.Brand>
                        {/* logo */}
                        <div class='flex items-center gap-[8px] cursor-pointer'>
                            <div>
                                <h1 class='font-bold text-[1.2rem] text-[var(--primary-color)]'>Entikay</h1>
                            </div>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Content hideIn='sm' variant='underline-rounded'>
                    {
                        admin__nav.map(item => (
                            <Navbar.Link isActive={location.pathname === item.path ? true : false} href={item.path}>{item.display}</Navbar.Link>
                        ) )
                    }
                    </Navbar.Content>
                    
                    <Navbar.Content>
                        <Navbar.Item hideIn='sm'>
                            {/* Search box */}
                            <Input 
                                clearable
                                contentLeft={<svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>}
                                contentLeftStyling={false}
                                css={{
                                    w: "100%",
                                    "@xsMax": {
                                      mw: "300px",
                                    },
                                    "& .nextui-input-content--left": {
                                      h: "100%",
                                      ml: "$4",
                                      dflex: "center",
                                    },
                                  }}
                                  placeholder="Tìm kiếm..."
                                />
                        </Navbar.Item>
                        <Navbar.Item>
                            {/* notification */}
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </span>
                        </Navbar.Item>
                        <Navbar.Item>
                            {/* notification */}
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </span>
                        </Navbar.Item>
                        <Navbar.Item hideIn='sm'>
                            <Avatar color='gradient' src={currentUser && currentUser.photoURL} size='md' bordered />
                        </Navbar.Item>
                    </Navbar.Content>
                    <Navbar.Collapse className='bg-white'>
                        <Navbar.CollapseItem>
                            <div className='flex space-x-4 items-center'>
                                <Avatar size='lg' src={currentUser.photoURL} />
                                <div className='flex flex-col'>
                                    <div className='font-bold text-lg'>{currentUser.displayName}</div>
                                    <div className='text-sm'>{currentUser.email}</div>
                                </div>
                            </div>
                        </Navbar.CollapseItem>
                        {
                            admin__nav.map((item, index) => (
                                <Navbar.CollapseItem key={item} isActive={location.pathname === item.path ? true : false} >
                                    <Link className='text-black min-w-full' href={item.path}>
                                        {item.display}
                                    </Link>
                                </Navbar.CollapseItem>
                            ) )
                        }
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    </div>
  )
}

export default AdminNav