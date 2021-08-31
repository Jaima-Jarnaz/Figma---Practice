import { MessengerIcon } from "components/atoms/messenger-icon";
import { NotificationIcon } from "components/atoms/notification-icon";
import { ProfileDesignation } from "components/atoms/profile-designation";
import { ProfileName } from "components/atoms/profile-name";
import { ProfilePic } from "components/atoms/profile-pic";

export interface SearchBarRightProps {
  profile_name: string;
  profile_designation: string;
}

export const SearchBarRight: React.FC<SearchBarRightProps> = ({
  profile_name,
  profile_designation,
}) => {
  return (
    <div className="m-searchbar-right">
      <div className="m-searchbar-right__icon">
        <MessengerIcon></MessengerIcon>
        <NotificationIcon></NotificationIcon>
      </div>

      <div className="m-searchbar-right__profile">
        <ProfilePic></ProfilePic>
        <div className="m-searchbar-right__profile-info">
          <ProfileName>{profile_name}</ProfileName>
          <ProfileDesignation>{profile_designation}</ProfileDesignation>
        </div>
      </div>
    </div>
  );
};
