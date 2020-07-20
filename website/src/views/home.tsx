import React from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Menu } from 'antd'
import {
	ThunderboltTwoTone,
	Html5TwoTone,
	InteractionTwoTone,
	FireTwoTone,
	LikeTwoTone,
	DatabaseTwoTone,
	AppstoreTwoTone,
	BugTwoTone,
	CustomerServiceTwoTone,
	HeartTwoTone,
	RocketTwoTone,
	TrophyTwoTone,
	CopyrightCircleTwoTone,
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
					<div className="blog-title">
						<ThunderboltTwoTone />
						&nbsp; 天下技术、唯勤不破 &nbsp;
						<ThunderboltTwoTone />
					</div>
				</Header>
				<Layout>
					<Sider width={200} className="site-layout-background">
						<Menu
							mode="inline"
							defaultSelectedKeys={['html-1']}
							defaultOpenKeys={['html']}
							style={{
								borderRight: 0,
								height: '100%',
							}}
						>
							<SubMenu key="html" icon={<Html5TwoTone />} title="Html">
								<Menu.Item key="html-1">option1</Menu.Item>
							</SubMenu>
							<SubMenu key="css" icon={<CopyrightCircleTwoTone />} title="Css">
								<Menu.Item key="css-1">option1</Menu.Item>
							</SubMenu>
							<SubMenu
								key="javascript"
								icon={<TrophyTwoTone />}
								title="Javascript"
							>
								<Menu.Item key="js-1">option1</Menu.Item>
							</SubMenu>
							<SubMenu
								key="typescript"
								icon={<RocketTwoTone />}
								title="Typescript"
							>
								<Menu.Item key="typescript-1">option1</Menu.Item>
							</SubMenu>
							<SubMenu
								key="网络请求"
								icon={<InteractionTwoTone />}
								title="网络请求"
							>
								<Menu.Item key="网络请求-XMLHttpRequest">
									XMLHttpRequest
								</Menu.Item>
								<Menu.Item key="网络请求-ajax">Ajax</Menu.Item>
								<Menu.Item key="网络请求-fetch">Fetch</Menu.Item>
								<Menu.Item key="网络请求-promise">Promise</Menu.Item>
							</SubMenu>
							<SubMenu key="热门框架" icon={<FireTwoTone />} title="热门框架">
								<Menu.Item key="热门框架-vue">Vue</Menu.Item>
								<Menu.Item key="热门框架-react">React</Menu.Item>
								<Menu.Item key="热门框架-angular">Angular</Menu.Item>
								<Menu.Item key="热门框架-singleSpa">前端微服务</Menu.Item>
							</SubMenu>
							<SubMenu key="跨端技术" icon={<LikeTwoTone />} title="跨端技术">
								<Menu.Item key="跨端技术-ReactNative">ReactNative</Menu.Item>
								<Menu.Item key="跨端技术-Flutter">Flutter</Menu.Item>
								<Menu.Item key="跨端技术-Weex">Weex</Menu.Item>
							</SubMenu>
							<SubMenu
								key="后端技术"
								icon={<DatabaseTwoTone />}
								title="后端技术"
							>
								<Menu.Item key="后端技术-Node">Node</Menu.Item>
								<Menu.Item key="后端技术-Eggjs">Eggjs</Menu.Item>
								<Menu.Item key="后端技术-Deno">Deno</Menu.Item>
								<Menu.Item key="后端技术-Python">Python</Menu.Item>
								<Menu.Item key="后端技术-Php">Php</Menu.Item>
								<Menu.Item key="后端技术-Java">Java</Menu.Item>
							</SubMenu>
							<SubMenu
								key="桌面应用"
								icon={<AppstoreTwoTone />}
								title="桌面应用"
							>
								<Menu.Item key="桌面应用-Electron">Electron</Menu.Item>
							</SubMenu>
							<SubMenu key="网络通信" icon={<BugTwoTone />} title="网络通信">
								<Menu.Item key="网络通信-1">HTTP&HTTPS</Menu.Item>
							</SubMenu>
							<SubMenu
								key="前端杂谈"
								icon={<CustomerServiceTwoTone />}
								title="前端杂谈"
							>
								<Menu.Item key="前端杂谈-1">前端杂谈</Menu.Item>
							</SubMenu>
							<SubMenu key="放飞自我" icon={<HeartTwoTone />} title="放飞自我">
								<Menu.Item key="放飞自我-1">放飞自我</Menu.Item>
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
