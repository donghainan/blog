import React from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Menu } from 'antd'
import {
	UserOutlined,
	PieChartOutlined,
	ThunderboltTwoTone
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
import '../styles/home.less'
const Home = () => {
	return (
		<div className="blog-home">
			<Layout>
				<Header className="header">
					<div className="logo">
						<span>Dong's Blog</span>
					</div>
					<div className="blog-title"><ThunderboltTwoTone />天下技术、唯勤不破<ThunderboltTwoTone /></div>
				</Header>
				<Layout>
					<Sider width={200} className="site-layout-background">
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%', borderRight: 0 }}
						>
							<Menu.Item key="0" icon={<PieChartOutlined />}>
								Option 1
							</Menu.Item>
							<SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
								<Menu.Item key="1">option1</Menu.Item>
								<Menu.Item key="2">option2</Menu.Item>
								<Menu.Item key="3">option3</Menu.Item>
								<Menu.Item key="4">option4</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}
						>
							Content
						</Content>
					</Layout>
				</Layout>
			</Layout>
		</div>
	)
}

export default inject()(observer(Home))
