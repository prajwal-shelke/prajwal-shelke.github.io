<?php
    while($row = mysqli_fetch_assoc($sql)){
        $sql2 = "SELECT * FROM messages WHERE (receiver_msg_id = {$row['unique_id']}
                OR sender_msg_id = {$row['unique_id']}) AND (receiver_msg_id = {$sender_id}
                OR sender_msg_id = {$sender_id}) ORDER BY msg_id DESC LIMIT 1";
        $query2 = mysqli_query($conn, $sql2);
        $row2 = mysqli_fetch_assoc($query2);
        if(mysqli_num_rows($query2) > 0){
            $result = $row2['msg'];
            //adding "you" to msg 
            ($sender_id == $row2['sender_msg_id']) ? $you = "You : " : $you = "";
        }else{
            $result = "No message available";
            $you = "";
        }

        //trimming message if message if greater than 28 words
        (strlen($result) > 28) ? $msg = substr($result, 0, 28)."..." : $msg = $result;

        //showing status of user
        ($row['status'] == "offline") ? $status = "offline" : $status = "";

        $output .= '
                    <a href="chat.php?user_id='.$row['unique_id'].'">
                        <div class="content">
                            <img src="php/images/'.$row['img'].'" alt="">
                            <div class="details">
                                <span>'.$row['fname']." ".$row['lname'].'</span>
                                <p>'.$you . $msg.'</p>
                            </div>
                        </div>
                        <div class="status-dot '.$status.'">
                            <i class="fas fa-circle"></i>
                        </div>
                    </a>';
    }

?>