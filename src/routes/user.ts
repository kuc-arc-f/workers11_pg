//
const router = {
  /**
  * create
  * @param
  *
  * @return
  */
  create: async function (client: any, req: any, res: any, env: any): Promise<Response>
  {
console.log(req);
    const retObj = {ret: "NG", data: [], message: ''}
    try{
      let result = {};
      if (req) {
        const sql = `
        INSERT INTO public."User" ( name, email, password, "updatedAt")
        VALUES($1, $2, $3,
        CURRENT_TIMESTAMP 
        ) 
        RETURNING *;
        `;
        //updatedAt
console.log(sql);
        const values = [req.name, req.email, req.password ];
        const res = await client.query(sql, values);
        result = res.rows[0];
console.log(result);
      }            
      return Response.json({ret: "OK", data: result});
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  }, 
  /**
  *
  * @param
  *
  * @return
  */ 
  delete: async function (client: any, req: any, res: any, env: any): Promise<Response>
  {
console.log(req);
    const retObj = {ret: "NG", data: [], message: ''}
    try{
      return Response.json({ret: "OK", data: req});
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  },
  /**
  *
  * @param
  *
  * @return
  */ 
  update: async function (client: any, req: any, res: any, env: any): Promise<Response>
  {
  //    console.log("#test.update");
console.log(req);
    const retObj = {ret: "NG", data: [], message: ''}
    try{
      return Response.json({ret: "OK", data: {}});
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  },
  /**
  *
  * @param
  *
  * @return
  */
  get: async function (client: any, req: any, res: any, env: any): Promise<Response>
  {
//    console.log(req);
//    let item = {};
    let result: any = {}; 
    const retObj = {ret: "NG", data: [], message: ''}
    try{
      if (req) {
        const sql = `
        SELECT * FROM public."User"
        WHERE email = '${req.email}'
        `;     
console.log(sql); 
        const res = await client.query(sql);  
        result = res.rows[0];
//console.log(result);
      }      
      return Response.json({ret: "OK", data: result});
    } catch (e) {
      console.error(e);
      return Response.json(retObj);
    } 
  }, 
 
}
export default router;
