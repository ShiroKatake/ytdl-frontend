import { cleanup, render } from '@testing-library/react';
import { PlaylistHeader } from './PlaylistHeader';

describe('Testiemonial Page', () => {
  it('should match the snapshot', async () => {
    const component = render(
      <table>
        <tbody>
          <PlaylistHeader isCheckedAll={false} checkAll={() => {}}/>
        </tbody>
      </table>
    );
    
    expect(component.baseElement).toMatchSnapshot();
    cleanup();
  });
});
