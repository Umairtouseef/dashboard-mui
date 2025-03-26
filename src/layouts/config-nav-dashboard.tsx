import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'User',
    path: '/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Product',
    path: '/products',
    icon: icon('ic-cart'),   
    info: (
      <Label color="error" variant="inverted"> 
        +3
      </Label>
    ),
  },
  { 
    title: 'Blog',
    path: '/blog',
    icon: icon('ic-blog'),
  },
  {
    title: 'Chat',
    path: '/chat',
    icon: icon('ic-chat'),
  },

  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  {
    title: 'Order',
    path: '/order',
    icon: icon('ic-order'),  
  },
  {
    title: 'Job',
    path: '/job',
    icon: icon('ic-job'),
  },
  {
    title: 'Mail',
    path: '/mail',
    icon: icon('ic-mail'),
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: icon('ic-mail'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];
