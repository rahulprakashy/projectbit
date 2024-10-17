import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import { Avatar, AvatarGroup, Box,Divider, Grid2, Link, Stack, Typography } from "@mui/material"
import Chat from "./icons/chat.png"
import Women1 from "./icons/women1.jpg"
import Women2 from "./icons/women2.jpg"
import Women3 from "./icons/women3.jpg"
import Women4 from "./icons/women4.jpg"
import Men1 from "./icons/men1.jpg"
import Bold from "./icons/bold.png"
import Italic from "./icons/italic.png"
import Underline from "./icons/underline.png"
import BulletedList from "./icons/bulletedlist.png"
import NumberedList from "./icons/numberedlist.png"
import Line from "./icons/line.png"
import Attach from "./icons/attach.png"
import Happy from "./icons/happy.png"
import Sent from "./icons/sent.png"
import Back from "./icons/back.png"
import User from "./icons/user.png"



export function Conversation(){
    return(
        <>
        <Grid2 component="div" sx={{backgroundColor:"#F4F4F7",display:{sm:'block',xs:'none'}}}>
        <Box sx={{backgroundColor:"white",borderRadius:"12px",display:"inline-block",margin:"12px"}}>
        <Box sx={{display:"inline-block",}}>
            <Stack component="span" direction="row" sx={{display:"flex",padding:"9px 16px",alignItems:"center"}}>
                  <Avatar src={Chat} sx={{overflow:"visible",width:"16px",height:"16px",}}/>
                  <Typography variant='h6' component="span" sx={{fontSize:"14px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#101010"}}>Conversation</Typography>
                  <AvatarGroup max={3} sx={{"& .MuiAvatar-root":{maxHeight:"20px",maxWidth:"20px",fontSize:"10px",},paddingLeft:"320px"}}>
                    <Avatar alt="Remy Sharp" src={Women1} sx={{maxHeight:"23px", maxWidth:"23px"}} />
                    <Avatar alt="Travis Howard" src={Women2} sx={{maxHeight:"23px", maxWidth:"23px"}} />
                    <Avatar alt="Cindy Baker" src={Women3} sx={{maxHeight:"23px", maxWidth:"23px"}}/>
                    <Avatar alt="Cindy Baker" src={Women4} sx={{maxHeight:"23px", maxWidth:"23px"}} />
                </AvatarGroup>
            </Stack>
            </Box>
            <Divider sx={{color:"#E4EAEE"}}></Divider>
            <Box sx={{paddingTop:"12px"}}>
            <Divider sx={{".MuiDivider-wrapper":{padding:"0px"},borderStyle:"dashed",}}>
                    <Typography sx={{fontSize:"12px",textTransform:"capitalize",textAlign:"left",color:"#535353",fontFamily:"Poppins",letterSpacing:"0px",border:"1px solid #E4EAEE",borderRadius:"13px",padding:"4px 12px"}}>Yesterday</Typography>
                </Divider>
            </Box>
            <Box padding="16px 0px 0px 16px" display="flex">
                <Avatar src={Men1} sx={{height:"28px",width:"28px"}}/>
                <Box padding="0px 0px 0px 12px">
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <Typography component="h6" variant='div' sx={{fontSize:"12px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#101010",textTransform:"capitalize"}}>Sarveshwara</Typography>
                        <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#8D8D8D",fontSize:"10px",paddingLeft:"8px"}}>12:00 PM</Typography>
                    </Box>
                    <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",fontSize:"12px",borderRadius:"12px",backgroundColor:"#F5F7F8",padding:"12px",marginTop:"8px",maxWidth:"346px"}}>Started with the design work. Forgot to update. I'll update the base for productivity framework screen once it's in good shape 🤞</Typography>
                </Box>
            </Box>
            <Box padding="24px 0px 0px 16px" display="inline-flex">
                <Avatar src={Women2} sx={{height:"28px",width:"28px"}}/>
                <Box padding="0px 0px 0px 12px">
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <Typography component="h6" variant='div' sx={{fontSize:"12px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#101010",textTransform:"capitalize"}}>Ramya</Typography>
                        <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#8D8D8D",fontSize:"10px",paddingLeft:"8px"}}>12:02 PM</Typography>
                    </Box>
                    <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",fontSize:"12px",borderRadius:"12px",backgroundColor:"#F5F7F8",padding:"12px",marginTop:"8px"}}>Thanks for the update 🤝 We’re looking forward. 🤙</Typography>
                </Box>
            </Box>
            <Typography component="hr" sx={{border:"white"}}></Typography>
            <Box padding="24px 0px 0px 16px" display="inline-flex">
                <Avatar src={Women1} sx={{height:"28px",width:"28px"}}/>
                <Box padding="0px 110px 0px 12px">
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <Typography component="h6" variant='div' sx={{fontSize:"12px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#101010",textTransform:"capitalize"}}>Srija</Typography>
                        <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#8D8D8D",fontSize:"10px",paddingLeft:"8px"}}>12:02 PM</Typography>
                    </Box>
                    <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",fontSize:"27px",borderRadius:"12px",backgroundColor:"#F5F7F8",marginTop:"8px",padding:"10px 13px",display:"flex",justifyContent:"center"}}>🤲</Typography>
                </Box>
            </Box>
            <Box padding="16px" >
                <Divider sx={{".MuiDivider-wrapper":{padding:"0px"},borderStyle:"dashed",}}>
                    <Typography sx={{fontSize:"12px",textTransform:"capitalize",textAlign:"left",color:"#535353",fontFamily:"Poppins",letterSpacing:"0px",border:"1px solid #E4EAEE",borderRadius:"13px",padding:"4px 12px"}}>Today</Typography>
                </Divider>
            </Box>
            <Box padding="0px 0px 0px 16px" display="inline-flex">
                <Avatar src={Men1} sx={{height:"28px",width:"28px"}}/>
                <Box padding="0px 0px 0px 12px">
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <Typography component="h6" variant='div' sx={{fontSize:"12px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#101010",textTransform:"capitalize"}}>Sarveshwara</Typography>
                        <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#8D8D8D",fontSize:"10px",paddingLeft:"8px"}}>08:00 AM</Typography>
                    </Box>
                    <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",fontSize:"12px",borderRadius:"12px",backgroundColor:"#F5F7F8",padding:"12px",marginTop:"8px",maxWidth:"346px"}}>Here is the updated productivity framework screen design with prototype. Thanks 🤞 <Link>https://xd.adobe.com/view/<Typography/>ed25d9d8-51af-47f8-8774-9bce57e75c23-b876/?fullscreen</Link></Typography>
                </Box>
            </Box>
            <Box padding="60px 16px 16px 16px">
                <Box padding="8px 382px 8px 16px" sx={{display:"flex",justifyContent:"space-between",border:"1px solid #E4EAEE",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",alignItems:"center",backgroundColor:"#F4F4F7"}}>
                    <Avatar src={Bold} sx={{width:"10px",height:"10px"}}/>
                    <Avatar src={Italic} sx={{width:"10px",height:"10px"}}/>
                    <Avatar src={Underline} sx={{width:"10px",height:"10px"}}/>
                    <Avatar src={Line} sx={{width:"10px",height:"10px"}}/>
                    <Avatar src={BulletedList} sx={{width:"10px",height:"10px"}}/>
                    <Avatar src={NumberedList} sx={{width:"10px",height:"10px"}}/>
                </Box>
                <Box sx={{border:"1px solid #E4EAEE",display:"flex",justifyContent:"space-between",padding:"14px 16px",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"}}>
                    <Typography sx={{fontSize:"12px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#8D8D8D"}}>Type in your message...</Typography>
                    <Box sx={{display:"flex",alignItems:"center"}}>
                        <Avatar src={Attach} sx={{width:"20px",height:"20px",paddingRight:"10px"}}/>
                        <Avatar src={Happy} sx={{width:"20px",height:"20px",paddingRight:"10px"}}/>
                        <Avatar src={Sent} sx={{width:"20px",height:"20px"}}/>
                    </Box>
                </Box>
            </Box>
            </Box>
       </Grid2>
       <Grid2 component="div" sx={{backgroundColor:"#F4F4F7",display:{sm:'none',xs:'block'}}}>
            <Box sx={{backgroundColor:"white",borderRadius:"12px",display:"inline-block",margin:"12px",}}>
                <Box sx={{padding:"16px",borderBottom:"1.5px solid #E4EAEE"}}>
                <Box sx={{display:"inline-flex",alignItems:"center"}}>
                    <Avatar src={Back} sx={{height:"32px",width:"32px"}}/>
                    <Typography variant='h6' sx={{fontSize:"16px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",maxWidth:"209px",color:"#101010",paddingLeft:"16px",paddingRight:"52px"}}>Nam libero tempore, cum solut nobi...</Typography>
                    <Typography variant="h6"  sx={{color:"#101010",fontSize:"12px",textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",border:"1px solid #E4EAEE",borderRadius:"6px",display:"flex",alignItems:"center",padding:"3px 6px"}}><Avatar src={User} sx={{paddingRight:"3px",height:'14px',width:'14px'}}/>4</Typography>
                </Box>
                </Box>
                <Box padding="16px" >
                <Divider sx={{".MuiDivider-wrapper":{padding:"0px"},borderStyle:"dashed",}}>
                    <Typography sx={{fontSize:"12px",textTransform:"capitalize",textAlign:"left",color:"#535353",fontFamily:"Poppins",letterSpacing:"0px",border:"1px solid #E4EAEE",borderRadius:"13px",padding:"4px 12px"}}>Today</Typography>
                </Divider>
            </Box>
            <Box padding="16px 0px 0px 16px" display="flex">
                <Avatar src={Men1} sx={{height:"28px",width:"28px"}}/>
                <Box padding="0px 0px 0px 12px">
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <Typography component="h6" variant='div' sx={{fontSize:"12px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#101010",textTransform:"capitalize"}}>Sarveshwara</Typography>
                        <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#8D8D8D",fontSize:"10px",paddingLeft:"8px"}}>12:00 PM</Typography>
                    </Box>
                    <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",fontSize:"14px",borderRadius:"12px",backgroundColor:"#F5F7F8",padding:"12px",marginTop:"8px",maxWidth:"278px"}}>Started with the design work. Forgot to update. I'll update the base for productivity framework screen once it's in good shape 🤞</Typography>
                </Box>
            </Box>
            <Box padding="24px 0px 0px 16px" display="inline-flex">
                <Avatar src={Women2} sx={{height:"28px",width:"28px"}}/>
                <Box padding="0px 0px 0px 12px">
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <Typography component="h6" variant='div' sx={{fontSize:"12px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#101010",textTransform:"capitalize"}}>Ramya</Typography>
                        <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#8D8D8D",fontSize:"10px",paddingLeft:"8px"}}>12:02 PM</Typography>
                    </Box>
                    <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",fontSize:"12px",borderRadius:"12px",backgroundColor:"#F5F7F8",padding:"12px",marginTop:"8px"}}>Thanks for the update </Typography>
                </Box>
            </Box>
            <Typography component="hr" sx={{border:"white"}}></Typography>
            <Box padding="24px 0px 0px 16px" display="inline-flex">
                <Avatar src={Men1} sx={{height:"28px",width:"28px"}}/>
                <Box padding="0px 110px 0px 12px">
                    <Box sx={{display:"flex",alignItems:"center",}}>
                        <Typography component="h6" variant='div' sx={{fontSize:"12px",fontFamily:"Poppins",textAlign:"left",letterSpacing:"0px",color:"#101010",textTransform:"capitalize"}}>Sharveshwara</Typography>
                        <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#8D8D8D",fontSize:"10px",paddingLeft:"8px"}}>12:03 PM</Typography>
                    </Box>
                    <Typography sx={{textAlign:"left",fontFamily:"Poppins",letterSpacing:"0px",color:"#101010",fontSize:"27px",borderRadius:"12px",backgroundColor:"#F5F7F8",marginTop:"8px",padding:"10px 13px",display:"inline-flex",justifyContent:"center"}}>🤲</Typography>
                </Box>
            </Box>
            <Divider sx={{borderBottom:"1.5px solid #E4EAEE",paddingTop:"234px"}}></Divider>
            <Box sx={{padding:"19px 24px 21px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",}}>
                <Typography sx={{color:"#8D8D8D",fontFamily:"Poppins",fontSize:"16px",textAlign:"left"}}>Type in your message...</Typography>
                <Avatar src={Sent} sx={{height:"20px",width:"20px"}}/>
            </Box>
            </Box>
       </Grid2>
       </>
       
    )
}