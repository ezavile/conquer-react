import { Card } from './components';

import image from './images/drawers.jpg';
import avatar from './images/avatar-michelle.jpg';

export const App = () => (
  <div className="md:px-8">
    <Card
      image={image}
      title="Shift the overall look and feel by adding these wonderful touches to furniture in your home"
      description="Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."
      author={{
        name: 'Michelle Appleton',
        avatar,
        publishedAt: '28 Jun 2020',
      }}
    />
  </div>
);
