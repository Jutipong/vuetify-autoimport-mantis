// icons
import {
    BarcodeOutlined,
    BgColorsOutlined,
    ChromeOutlined,
    DashboardOutlined,
    FontSizeOutlined,
    ProjectOutlined,
} from '@ant-design/icons-vue'

const sidebarItem: Menu[] = [
    { header: 'Example' },
    {
        title: 'Product',
        icon: ProjectOutlined,
        to: '/product',
    },
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
    { header: 'Support' },
    {
        title: 'Sample Page',
        icon: ChromeOutlined,
        to: '/sample-page',
    },
]

export default sidebarItem
