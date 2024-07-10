// icons
import {
    BarcodeOutlined,
    BgColorsOutlined,
    ChromeOutlined,
    CrownOutlined,
    DashboardOutlined,
    FontSizeOutlined,
    LoginOutlined,
    ProfileOutlined,
    QuestionOutlined,
} from '@ant-design/icons-vue'

const sidebarItem: Menu[] = [
    { header: 'Navigation' },
    {
        title: 'Dashboard',
        icon: DashboardOutlined,
        to: '/dashboard',
    },
    { header: 'Utilities' },
    {
        title: 'Typography',
        icon: FontSizeOutlined,
        to: '/typography',
    },
    {
        title: 'Color',
        icon: BgColorsOutlined,
        to: '/colors',
    },
    {
        title: 'Shadow',
        icon: BarcodeOutlined,
        to: '/shadow',
    },
    {
        title: 'Ant Icons',
        icon: CrownOutlined,
        to: '/icon/ant',
    },
    { header: 'Support' },
    {
        title: 'Sample Page',
        icon: ChromeOutlined,
        to: '/sample-page',
    },
]

export default sidebarItem
