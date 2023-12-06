const express= require('express');
const {ServerConfig,Logger}=require('./config');
const apiRoutes= require('./routes');
const app = express();
const cors = require('cors');
const corsOrigin = "*";



app.use(cors({
    origin: corsOrigin,
  }));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/api',apiRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`listening on port: ${process.env.PORT}`);
    Logger.info('successfully started',"root",{msg:"something started"});

    
})