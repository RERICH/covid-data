import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export default function Comments() {

    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 1.5rem", alignItems: "center" }}>
            <Avatar icon={<UserOutlined />} />
            <div>
                3 <MessageOutlined />
            </div>
        </div>
    )
}