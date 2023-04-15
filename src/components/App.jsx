import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/friendlist';
import { TransactionsHistory } from './TransactionsHistory/transactionshistory.jsx';

import user from './Profile/user.json';
import stats from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionsHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        avatar={user.avatar}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </div>
  );
};
