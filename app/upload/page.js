import React from "react";
import { Button, Flex } from "antd";
import { Input } from "antd";
function page() {
  return (
    <div className="spark-section-5">
      <div className="spark-container-5 w-container">
        <div className="spark-centered-901">
          <h2>Upload</h2>
          <p className="spark-foreground-secondary-2">
            감성 디지털화 서비스는 당신의 말과 글을 넘어서는 경험을 제공합니다.
            간직하고 싶은 그 순간, 그 감정을 텍스트로 전달하세요.
          </p>
        </div>
        <Flex
          vertical
          gap="small"
          style={{
            width: "100%",
          }}
        >
          <div style={{marginBottom:"10%"}}>
            <p style={{ fontWeight: "bold" }}>제목</p>
            <Input placeholder="Basic usage" />
            <p style={{ fontWeight: "bold" }}>설명</p>
            <Input placeholder="Basic usage" />
          </div>

          <Button style={{ backgroundColor: '#7F56D9', borderColor: '#7F56D9',fontWeight:'bold' }} type="primary" block>
            녹음하기
          </Button>
          <Button style={{ backgroundColor: '#7F56D9', borderColor: '#7F56D9',fontWeight:'bold' }} type="primary" block>
            전송하기
          </Button>
        </Flex>
      </div>
    </div>
  );
}

export default page;
