import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Typography } from "antd";
import { useState } from "react";
import { NavLink, type NavLinkProps } from "react-router";

function NavItem(
  props: NavLinkProps & {
    closeDrawer: () => void;
  }
) {
  return (
    <NavLink
      className={({ isActive }) =>
        [
          "p-3 mb-3 text-black rounded-lg hover:bg-gray-200 transition-colors duration-100",
          isActive ? "bg-blue-100 text-blue-500 hover:bg-blue-100" : "",
        ].join(" ")
      }
      onClick={props.closeDrawer}
      {...props}
    >
      {props.children}
    </NavLink>
  );
}

function BaseMenu({
  hideTitle,
  closeDrawer,
}: {
  hideTitle?: boolean;
  closeDrawer: () => void;
}) {
  return (
    <nav className="p-2">
      {!hideTitle && (
        <NavLink to="/" end>
          <Typography.Paragraph className="p-3 text-center text-xl">
            👋
          </Typography.Paragraph>
        </NavLink>
      )}

      <ul className="flex flex-col h-[100vh] max-h-[100vh] min-h-[100vh] min-w-[10rem] overflow-auto">
        <NavItem to="/dynamic-form" closeDrawer={closeDrawer} end>
          Dynamic Form
        </NavItem>
        <NavItem to="/form-builder" closeDrawer={closeDrawer} end>
          Form Builder
        </NavItem>
      </ul>
    </nav>
  );
}

export function Menu() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <aside className="hidden sm:block">
        <BaseMenu closeDrawer={() => setOpen(false)} />
      </aside>
      <div className="block: sm:hidden absolute top-0 left-0 p-5 z-50">
        <Button onClick={showDrawer} icon={<MenuOutlined />}></Button>
      </div>
      <Drawer
        title={
          <NavLink to="/" onClick={closeDrawer} end>
            Menu
          </NavLink>
        }
        placement="left"
        onClose={closeDrawer}
        open={open}
      >
        <BaseMenu closeDrawer={() => setOpen(false)} hideTitle />
      </Drawer>
    </>
  );
}
