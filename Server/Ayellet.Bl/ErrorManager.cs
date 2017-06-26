using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace Ayellet.Bl
{
    public class ErrorManager
    {
        public static Exception OnError(Exception ex)
        {
            Debug.WriteLine(ex.ToString());
            return ex;
        }
    }
}
