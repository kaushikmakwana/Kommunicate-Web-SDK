
Kommunicate =  typeof Kommunicate =='undefined'?{}:Kommunicate;

/**
 * Kommunciate.conversation contains all methods to add functionality into conversations. 
 * this file has been loaded before mck-sidebox.js. do not add any code dependent to mck sidebox.  
 */
Kommunicate.conversation = {
    STATUS: Kommunicate.conversationHelper.status,
    
    /**
     * this method will be called when click event triggered on a conversation in conversation list. 
     * @param {object} data group data received from Applozic
     * @param {object} error  error if any.
     */
    processConversationOpnedFromList : function(data,error){
        if(error){
            console.log("Error received. can not post process the conversation ",error);
            return;
        }
       var conversationDetail = data && data.groupFeeds[0];
        Kommunicate.conversationHelper.isConversationClosed(conversationDetail) && KommunicateUI.showClosedConversationBanner();

        


    }
}