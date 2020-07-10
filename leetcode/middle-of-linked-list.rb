# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def middle_node(head)
    arr = []
    while (head.next)
        arr.push(head)
       head = head.next 
    end
    arr.push(head)
    arr[arr.length/2]
   
    
end