import React from 'react';
import { Avatar,Button,Box,Tab,Tabs, Card} from '@material-ui/core';
import PostCard from '../../components/post/PostCard';
import UserReelCard from '../../components/Reels/UserReelCard';
const tabs = [
  {value:"post",name:"Post"},
  {value:"reels",name:"Reels"},
  {value:"saved",name:"Saved"},
  {value:"repost",name:"RePost"},
];
const posts = [1,1,1,1];
const reels = [1,1,1,1];
const saved = [1,1];
const repost = [1,1,1,1];
const Profile = () => {
  const [value, setValue] = React.useState('post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className='my-10 w-[70%]'>

      <div className='rounded-md '>
            <div className='h-[15rem]'>
                  <img className='w-full h-full rounded-t-md'
                   src="https://images.pexels.com/photos/16030012/pexels-photo-16030012/free-photo-of-three-tall-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar 
                     className='transform -translate-y-24'
                     style={{ width: "10rem", height: "10rem" }}
                     src = 'https://lh3.googleusercontent.com/a/ACg8ocINlWPUAMMg3z3xCArGQn4BIEvsxrqFzMRbtHMzHarEXmvx4o8=s96-c-rg-br100'
                     alt='Profile'
                     />
                     {true?<Button 
                     style={{borderRadius:"20px"}}
                     variant='outlined' color='primary'>Edit Profile</Button>
                     :
                     <Button 
                     style={{borderRadius:"20px"}}variant='outlined' color='primary'>Follow</Button>}
                     
                     
            </div>
            <div className='p-5'>
                        <div>
                          <h1 className='py-1 font-bold text-xl'>Kaisar</h1>
                          <p>@K4151R</p>
                        </div>
                        <div className='flex gap-5 items-center py-3'>
                          <span>41 post</span>
                          <span>35 followers</span>
                          <span>5 followings</span>
                        </div>
                        <div>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, consequuntur perferendis. </p>
                        </div>
          </div>
          <section>
          <Box style={{ width: '100%',borderBottom:1,borderColor:"divider"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="wrapped label tabs example"
      >
        {tabs.map((item)=><Tab value={item.value} label={item.name} />)}
      </Tabs>
    </Box>
           <div className='flex justify-center'>
                {value ==="post" ? (<div className='space-y-5 w-[70%] my-10'>
                  {posts.map((item)=><div className='border border-slate-100 rounded-md'>
                    <PostCard/>
                  </div>  )}
                </div> ): value==="reels" ? (
                <div className='flex justify-center flex-wrap  gap-2 my-5 '>
                        {reels.map((item)=><UserReelCard/>)}
                </div>) : value==="saved" ?  (<div className='space-y-5   w-[70%] my-10'>
                  {saved.map((item)=><div className='border border-slate-100 rounded-md'>
                    <PostCard/>
                  </div>  )}
                </div> ) :
                <div>
                  Repost
                </div>
                }
            </div>
          </section>
      </div>
    </Card>
  )
}

export default Profile