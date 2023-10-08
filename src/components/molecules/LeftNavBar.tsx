import { Menu, MenuProps, Typography } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MenuIcon from '../atoms/MenuIcon';
import NeedHelpCard from '../atoms/NeedHelpCard';

interface Iprops {

}

type MenuItemClickEvent = {
    key: React.Key;
};

enum MenuClickType {
    dashboard = 'dashboard',
    tables = 'tables',
    billing = 'billing',
    rtl = 'rtl',
    propfile = 'propfile',
    signin = 'signin',
    signup = 'signup',
}

type MenuItem = Required<MenuProps>['items'][number];

function getItemFirst(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
function getItemSecond(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const LeftNavBar: React.FC<Iprops> = (props) => {
    const router = useRouter();

    const [selectedKey, setSelectedKey] = useState<MenuClickType | ''>('')

    const firstItems: MenuItem[] = [
        getItemFirst('Dashboard', 'dashboard', <MenuIcon isActive={selectedKey === MenuClickType.dashboard} src={`/Icons/${selectedKey === MenuClickType.dashboard ? "homeWhite" : "homeGreen"}.svg`} />),
        getItemFirst('Tables', 'tables', <MenuIcon isActive={selectedKey === MenuClickType.tables} src={`/Icons/${selectedKey === MenuClickType.tables ? "chartWhite" : "chartGreen"}.svg`} />),
        getItemFirst('Billing', 'billing', <MenuIcon isActive={selectedKey === MenuClickType.billing} src={`/Icons/${selectedKey === MenuClickType.billing ? "walletWhite" : "walletGreen"}.svg`} />),
        getItemFirst('Rtl', 'rtl', <MenuIcon isActive={selectedKey === MenuClickType.rtl} src={`/Icons/${selectedKey === MenuClickType.rtl ? "settingsWhite" : "settingsGreen"}.svg`} />),
    ]

    const secondItems: MenuItem[] = [
        getItemSecond('Profile', 'profile', <MenuIcon isActive={selectedKey === MenuClickType.propfile} src={`/Icons/${selectedKey === MenuClickType.propfile ? "personWhite" : "personGreen"}.svg`} />),
        getItemSecond('Sign In', 'signin', <MenuIcon isActive={selectedKey === MenuClickType.signin} src={`/Icons/${selectedKey === MenuClickType.signin ? "documentWhite" : "documentGreen"}.svg`} />),
        getItemSecond('Sign Up', 'signup', <MenuIcon isActive={selectedKey === MenuClickType.signup} src={`/Icons/${selectedKey === MenuClickType.signup ? "sharpWhite" : "sharpGreen"}.svg`} />),
    ]

    useEffect(() => {
        if (router.pathname.includes(MenuClickType.tables)) {
            setSelectedKey(MenuClickType.tables)
        } else {
            setSelectedKey(MenuClickType.dashboard)
        }
    }, [router.pathname])

    return (
        <>
            <Menu
                selectedKeys={[selectedKey]}
                mode="inline"
                theme="dark"
                items={firstItems}
                style={{ backgroundColor: "var(--background)" }}
                onClick={(e: MenuItemClickEvent) => {
                    if (e.key === MenuClickType.dashboard) {
                        router.push('/')
                    } else if (e.key === MenuClickType.tables) {
                        router.push('/tables')
                    }
                }}
            />

            <Typography className='ml-7 font-bold'>ACCOUNT PAGES</Typography>

            <Menu
                selectedKeys={[selectedKey]}
                mode="inline"
                theme="dark"
                items={secondItems}
                onClick={(e: MenuItemClickEvent) => {
                    if (e.key === MenuClickType.signin) {
                        router.push('/signin')
                    } else if (e.key === MenuClickType.signup) {
                        router.push('/signup')
                    }
                }}
                style={{ paddingBottom: "44px", backgroundColor: "var(--background)" }}
            />

            <NeedHelpCard />

        </>
    )

}

export default LeftNavBar