import { MenuBox } from "@/pages/Info/Info.styled";
import Icon from "@/components/Common/Icon";
import { useNavigate } from "react-router-dom";
import { Divider } from '@mui/material';
import { menuItems } from "@/pages/Info/inso.defs";


interface iInfoProps {

}

const Info = ({}: iInfoProps) => {
    const navigate = useNavigate();

    return (
        <>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <MenuBox onClick={() => navigate(item.path)}>
                            <Icon icon={item.icon} width={30} height={30}/>
                            {item?.label}
                        </MenuBox>
                        <Divider/>
                    </li>
                ))}

            </ul>
        </>
    );
};

export default Info;