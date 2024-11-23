const express = require('express');
const cors = require('cors');  // 导入 CORS 中间件

const app = express();
const port = 3000;

// 使用 CORS 中间件启用跨域访问
app.use(cors());  // 允许所有源的请求（如果需要更严格的配置，可以设置 origin）

// 解析 JSON 请求体
app.use(express.json());

// 示例 GET 路由
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const userInfo = { message: `User information for ID: ${userId}`, userId };
  res.json(userInfo);  // 返回用户信息
});

// 示例 POST 路由
app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  const response = { message: `Received data for ${name}`, receivedData: { name, age } };
  res.json(response);  // 返回响应数据
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
