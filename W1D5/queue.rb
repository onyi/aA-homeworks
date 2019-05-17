class Queue
 
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def peek
    # I assume peek seeks for the first element in queue?
    @queue.first
  end
end